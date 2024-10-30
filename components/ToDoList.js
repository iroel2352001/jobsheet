import React, {useState} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ToDoItem from "./ToDoItem";
import Input from "./input";

const ToDoList = () => {
    // Mengelola state untuk daftar tugas
    const [tasks, setTask] = useState([]);

    // Fungsi untuk menambahkan tugas baru
    const addTask = (task) => {
        setTask([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
    };

    // Fungsi untuk menandai tugas sebagai selesai/belum selesai
    const toggleTask = (id) => {
        setTask(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Fungsi untuk menghapus tugas
    const deleteTask = (id) => {
        setTask(tasks.filter(task => task.id !== id));
    };

    return (
        <View style={styles.container}>
            {/* Input untuk menambahkan tugas baru */}
            <Input onAddTask={addTask} />

            {/* Daftar tugas */}
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <ToDoItem
                 task={item}
                 onToggleTask={toggleTask}
                 onDeleteTask={deleteTask}
                /> 
              )}
              keyExtractor={(item) => item.id}
            />  
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default ToDoList;
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ToDoItem = ({ task, onToggleTask, onDeleteTask}) => {
    return (
      <View style={style.itemContainer}>
         <Text style={[styles.taskText, task,completed && style.completed]}>
            {task.text}
         </Text>

         {/* Tombol untuk mengubah status tugas*/}
         <Button
           title={task.completed ? 'Undo' : 'Complate'}
           onPress={() => onToggleTask(task.id)}
         />

         {/* Tombol untuk menghapus tugas*/}
         <Button
           title= "Delete"
           onPress={() => onDeleteTask(task.id)}
           color="red"
         />
      </View>
    );
};

const style = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    taskText: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#999'
    },
});

export default ToDoItem;
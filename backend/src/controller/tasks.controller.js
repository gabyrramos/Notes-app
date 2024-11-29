import mongoose from "mongoose";
import { Task } from '../models/Task.js';

export const getTasks = async (req, res)=> {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json("There are no tasks at the moment");
    }
  };

  export const getTaskById = async (req, res) => {
    try{
        const taskbyId = await Task.findById(req.params.id);
        res.json(taskbyId);
    } catch{
        res.status(500).json("We couldn't find a task with that id")
    }
  };
  
 export const postTask = async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(400).json("Something went wrong!", error);
    }
  };
  
  export const editTask = async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(task);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
 export const deleteTask= async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(204).json("Delete was succesful");
    } catch (error) {
      res.status(400).send(error);
    }
  };




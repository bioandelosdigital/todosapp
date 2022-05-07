import React from "react";
import './TodosLoading.css';

function TodosLoading(){
    const textoCarga = 'Cargando TODOs...';

    return (
        <React.Fragment>
            <div className="LoadingTodo-container">
                <span className="LoadingTodo-completeIcon"></span>
                <p className="LoadingTodo-text">{textoCarga}</p>
                <span className="LoadingTodo-deleteIcon"></span>
            </div>

            <div className="LoadingTodo-container">
                <span className="LoadingTodo-completeIcon"></span>
                <p className="LoadingTodo-text">{textoCarga}</p>
                <span className="LoadingTodo-deleteIcon"></span>
            </div>

            <div className="LoadingTodo-container">
                <span className="LoadingTodo-completeIcon"></span>
                <p className="LoadingTodo-text">{textoCarga}</p>
                <span className="LoadingTodo-deleteIcon"></span>
            </div>

            <div className="LoadingTodo-container">
                <span className="LoadingTodo-completeIcon"></span>
                <p className="LoadingTodo-text">{textoCarga}</p>
                <span className="LoadingTodo-deleteIcon"></span>
            </div>
        </React.Fragment>
    );
}

export {TodosLoading};
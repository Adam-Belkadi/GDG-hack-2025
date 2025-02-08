import { useState, useEffect } from "react";

export default function Category({ categoryName, isAll = false, isClicked, onClick }) {
    return (
        <div
            className={`category ${isAll ? "categoryAll" : ""} ${isClicked ? "Clicked" : ""}`}
            onClick={onClick}
        >
            {categoryName}
        </div>
    );
}

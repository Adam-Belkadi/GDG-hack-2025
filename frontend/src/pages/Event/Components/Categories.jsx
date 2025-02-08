import { useState } from "react";
import Category from "./Category";

export default function Categories({ categoriesList }) {
    const [categories, setCategories] = useState(
        categoriesList.map(category => ({ ...category, isClicked: false }))
    );
    const [isAllClicked, setIsAllClicked] = useState(true);

    const handleCategoryClick = (clickedCategory) => {
        if (clickedCategory === "All") {
            // If "All" is clicked, reset all categories and set "All" to true
            setCategories(categories.map(cat => ({ ...cat, isClicked: false })));
            setIsAllClicked(true);
        } else {
            setIsAllClicked(false);
            setCategories(categories.map(cat =>
                cat.categoryName === clickedCategory
                    ? { ...cat, isClicked: !cat.isClicked }
                    : cat
            ));
        }
    };

    return (
        <div className="categories">
            <Category 
                categoryName="All" 
                isAll={true} 
                isClicked={isAllClicked} 
                onClick={() => handleCategoryClick("All")}
            />
            {categories.map((category, index) => (
                <Category 
                    key={index} 
                    categoryName={category.categoryName} 
                    isClicked={category.isClicked} 
                    onClick={() => handleCategoryClick(category.categoryName)}
                />
            ))}
        </div>
    );
}

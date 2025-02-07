import '../EventStyle.css';
export default function Category({categoryName}) {
    return (
        <>
            <div className="category">
                {categoryName}
            </div>
        </>
    )
}
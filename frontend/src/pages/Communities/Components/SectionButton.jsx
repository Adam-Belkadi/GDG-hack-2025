export default function SectionButton({ sectionName, clicked = false , onClick }) {
  return (
    <>
      {clicked ? (
        <div className="sectionButton sectionButtonC" onClick={onClick}>{sectionName}</div>
      ) : (
        <div className="sectionButton" onClick={onClick}>{sectionName}</div>
      )}
    </>
  );
}

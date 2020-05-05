export const loadNotes = () => {
  const savedItems = JSON.parse(localStorage.getItem("notes"));
  const notesPromise = savedItems
    ? Promise.resolve(savedItems)
    : Promise.resolve([
        {
          id: 1,
          title: "Testi1",
          content: "Sisältö2",
          status: "New"
        },
        {
          id: 2,
          title: "Testi2",
          content: "Sisältö2",
          status: "Completed"
        },
        {
          id: 3,
          title: "Testi3",
          content: "Sisältö3",
          status: "Not completed"
        }
      ]);

  return notesPromise;
};

export const saveNotes = notes =>
  localStorage.setItem("notes", JSON.stringify(notes)) && loadNotes();

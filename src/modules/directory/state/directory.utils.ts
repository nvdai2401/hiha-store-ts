function compare(a, b) {
  return a.id - b.id;
}

export const convertSnapshotToSectionsArray = (snapshot) => {
  const sections = snapshot.docs.map((doc) => doc.data());
  return sections.sort(compare);
};

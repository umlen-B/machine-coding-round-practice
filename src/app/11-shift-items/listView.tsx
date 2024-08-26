export type ListItem = {
  id: string;
  value: string;
  checked: boolean;
};

type ListViewProps = {
  addItem: (value: string, type: string) => void;
  type: string;
  onCheckChange: (value: boolean, id: string, type: string) => void;
  items: ListItem[];
  updateAll: (event: any) => void;
};
// Wrap in React.memo with compare function to check length of items
function ListView(props: ListViewProps) {
  // function ListView(props) {
  const addNewItem = (e) => {
    if (e.key === "Enter") {
      props.addItem(e.target.value, props.type);
    }
  };
  const updateChecked = (e) => {
    props.onCheckChange(
      e.target.checked,
      e.target.getAttribute("id"),
      props.type
    );
  };
  const getSelectedCheck = () => {
    const selectedCount = props.items.reduce((acc, item) => {
      if (item.checked) {
        return acc + 1;
      }
      return acc;
    }, 0);
    const isAllSelected = !!(
      selectedCount && selectedCount === props.items.length
    );
    // add aria atrributes for span for better accessiblity
    return selectedCount && !isAllSelected ? (
      <div>
        <span id={props.type} checked={true} onClick={props.updateAll}>
          [-]
        </span>{" "}
        {selectedCount}/{props.items.length} Selected
      </div>
    ) : (
      <div>
        <input
          id={props.type}
          type={"checkbox"}
          checked={isAllSelected}
          onChange={props.updateAll}
        />
        {selectedCount}/{props.items.length} Selected
      </div>
    );
  };
  return (
    <section>
      <input
        className="addItem"
        type="text"
        placeholder="Item name"
        onKeyDown={addNewItem}
      />
      {getSelectedCheck()}
      {/* Use event delegation by creating a wrapper */}
      {props.items?.map((listItem) => {
        return (
          <div key={listItem.id}>
            <input
              id={listItem.id}
              type={"checkbox"}
              checked={listItem.checked}
              onChange={updateChecked}
            />
            <span>{listItem.value}</span>
          </div>
        );
      })}
    </section>
  );
}
export default ListView;
// Unable to recollect proper syntax
// export default React.memo(ListView, (prev, current) => {

//     prev.items.length === current.items.length
// })

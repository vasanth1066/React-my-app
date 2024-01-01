import "./ExpenseFiltre.css";
function ExpenseFiltre(props) {
  function filtreHandler(e) {
    console.log(e.target.value, "selected");
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.select} onChange={filtreHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}
export default ExpenseFiltre;

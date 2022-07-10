function DisplayHistory({ history }) {
  return (
    <div style={{ backgroundColor: "powderblue" }}>
      History
      {history.map((item, key) => {
        return (
          <h5 style={{ color: "black" }} key={key}>
            {item}
          </h5>
        );
      })}
    </div>
  );
}

export default DisplayHistory;

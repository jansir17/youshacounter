function DisplayHistory({ history }) {
  // for (let i = 0; i < history.length; i++) {
  //   console.log(history[i]);
  // }
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

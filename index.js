const Button = (props) => {
  //  Write your code here.
  const { like, comment, share } = props;
  console.log(like, comment, share);
  return (
    <div className="bg-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <button className="button-like">{like}</button>
        <button className="button-comment">{comment}</button>
        <button className="button-share">{share}</button>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <Button like="Like" />
    <Button comment="Comment" />
    <Button share="Share" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

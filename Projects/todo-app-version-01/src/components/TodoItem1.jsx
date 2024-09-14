
function TodoItem1() {

    let todoName = 'Buy Milk';
    let todoDate = '4/10/2024';

    return <div className="container">

        <div className="row">
          <div className="col-5">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
    </div>
}

export default TodoItem1;
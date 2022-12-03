import SideMenu from "../../components/SideMenu";

const CreateContest = () => {
  return (
    <div>
      <SideMenu />
      <div className="main-wrap">
        <div className="wrapSection">
          <div className="block active">
            <div className="create-contest">
              <h2>Create contest</h2>
              <form action="">
                <input type="text" placeholder="Contest name" />
                <input type="datetime-local" id="s-date" />
                Start date
                <input type="datetime-local" id="e-date" />
                End date
                <input type="number" placeholder="Number of tickets" />
                <div className="items">
                  <h3>Choose prize</h3>
                  <div className="item">
                    <input type="checkbox" name="" id="" />
                    <p>Prize Name</p>
                  </div>
                  <div className="item">
                    <input type="checkbox" name="" id="" />
                    <p>Prize Name</p>
                  </div>
                  <div className="item">
                    <input type="checkbox" name="" id="" />
                    <p>Prize Name</p>
                  </div>
                  <div className="item">
                    <input type="checkbox" name="" id="" />
                    <p>Prize Name</p>
                  </div>
                </div>
                Select main prize
                <select name="" id="">
                  <option value="">Prize</option>
                  <option value="">Prize</option>
                  <option value="">Prize</option>
                  <option value="">Prize</option>
                </select>
                <button>Create contest</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContest;

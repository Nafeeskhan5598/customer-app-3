import React from "react";
// import Dropdown from "../../common/Dropdown";
import ChildNavbar from '../../components/ChildNavbar'
import SearchBar from "../../field/SearchBar";
import OrderShortBtn from "../../button/OrderShortBtn";
import PageHeading from "../../common/PageHeading";

function AllTaskSub(Props) {

    return (

        <>

            {/* history.push('/'); */}
            <div className="todolist-all-area ">
                <div className="todolist-first-area">
                <OrderShortBtn
                        todoHeading="All Task"
                    />
                
                </div>
                <div className="todolist-second-area">
                    <div className="todolist-links">

                        <ChildNavbar />

                        <div className="search-bar-area">
                            <div className="seacrch-text">
                            <PageHeading pageHeading="All Task" pageHeadingPeragraph="Search and view your task from here"> </PageHeading>
                            </div>
                            <form>
                                <SearchBar />
                                <div className="btn">
                                    <button type="submit">Search</button>
                                    <button type="submit">ADVANCE SEARCH</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllTaskSub;
// import React from 'react';
import React, { Component } from 'react';

import './SearchComponent.scss';

class SearchComponent extends Component {

    render() {

        return (
            <>
                <h1>SearchComponent</h1>
                {/* <input type="text" name="myText" value="Norway" selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico;Norway;Sweden;United Kingdom;United States"/>  */}
                <form action="/action_page.php">
                    <input list="browsers" name="browser" />
                    <datalist id="browsers">
                        <option value="Internet Explorer" />
                        <option value="Firefox" />
                        <option value="Chrome" />
                        <option value="Opera" />
                        <option value="Safari" />
                    </datalist>
                    <input type="submit" />
                </form>


                <div style={{
                    position: "relative", width: "200px", height: "25px", border: 0,
                    padding: 0, margin: 0
                }}>
                    <select style={{
                        position: "absolute", top: "0px", left: "0px",
                        width: "200px", height: "25px", lineHeight: "20px",
                        margin: 0, padding: 0
                    }} onChange={this.onMenuSelect}>
                        <option></option>
                        <option value="starttime">Filter by Start Time</option>
                        <option value="user"     >Filter by User</option>
                        <option value="buildid"  >Filter by Build Id</option>
                        <option value="invoker"  >Filter by Invoker</option>
                    </select>
                    <input name="displayValue" id="displayValue"
                        style={{
                            position: "absolute", top: "2px", left: "3px", width: "180px",
                            height: "21px", border: "1px solid #A9A9A9"
                        }}
                        onfocus={this.select} type="text" onChange={this.onIdFilterChange}
                        onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}
                        placeholder="Filter by Build ID" />
                </div>

                <div class="dropdown">
                    <input type="text" />
                    <select onchange="this.previousElementSibling.value=this.value; this.previousElementSibling.focus()">
                        <option>This is option 1</option>
                        <option>Option 2</option>
                    </select>
                </div>
            </>
        )
    }
}

// const SearchComponent = props => {

//     <>
//         <h1>SearchComponent</h1>
//     </>
// }

export default SearchComponent;
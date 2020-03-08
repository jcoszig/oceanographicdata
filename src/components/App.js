import React, { Component } from "react";
 
class App extends Component {

  // Initialize state
  state = {
    dataProperties : {
      type : {},
      temporal : {},
      publisherName : {}, //publisher_name
      publisherType : {}, //publisher_type
      modified : {},
      identifier : {},
      contactpointHasemail : {}, //contactpoint_hasemail
      contactpointFn : {}, //contactpoint_fn
      contactpointType : {}, //contactpoint_type
      accrualperiodicity : {},
      accesslevel : {},
      spatial : {},
      title : {},
      description : {}
    }
  }

  render() {
    return (
      <div>
        App component.
      </div>
    );
  }
}
 
export default App;
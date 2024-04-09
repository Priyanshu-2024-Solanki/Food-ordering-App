import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-center">About</h1>
        <div className="bg-orange-100 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to our Web Series on React by Akshay Saini
          </h2>
          <p className="text-lg">
            In this series, you will learn various concepts of React.js taught
            by Akshay Saini.
          </p>
          <p className="text-lg my-4">
            Stay tuned for exciting tutorials and projects!
          </p>
          <UserClass name={"first"} location={"Dehradun"} avatar_url={""} />
        </div>
      </div>
    );
  }
}

export default About;

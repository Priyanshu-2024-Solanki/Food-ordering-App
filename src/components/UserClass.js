import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "default name",
        location: "default location",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + " child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch(
      "https://api.github.com/users/Priyanshu-2024-Solanki"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
  
    return (
      <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <img className="w-full" src={avatar_url} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Name: {name}</div>
          <p className="text-gray-700 text-base">Location: {location}</p>
          <p className="text-gray-700 text-base">Contact: @priyanshuSept11</p>
        </div>
      </div>
    );
  }
  
}

export default UserClass;

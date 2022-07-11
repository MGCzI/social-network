import React from "react";
import { Component } from "react";

// Function
interface UploaderProps {
    methodInApp?: (a: boolean) => void;
    // methodInApp?: Function;
}

export default class Uploader extends Component<UploaderProps> {
    constructor(props: UploaderProps) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log("Uploader just mount");
    }
    methodInUploader(event: React.MouseEvent) {
        console.log("I am clicking accept!");
        event.preventDefault();
        // /upload.json

        fetch("/upload.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log("Data received POST load.json", data);

                // if (data.status === "Success") {
                //     location.reload();
                // } else {
                //     this.setState({
                //         error: true,
                //     });
                // }
                // console.log("this.state:", this.state);
            })
            .catch(() => {
                // this.setState(
                //     {
                //         error: true,
                //     },
                //     () => console.log("this.state:", this.state)
                // );
            });

        // Here we want to call the method of my parent. That live in props.
        //  this.props.methodInApp(true);
    }
    render() {
        return (
            <div>
                <h1>I am the Uploader!</h1>
                <form encType="multipart/form-data">
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        ref="file"
                        id="inputTag"
                    />
                    <button
                        onClick={(e) => {
                            this.methodInUploader(e);
                        }}
                    >
                        Accept
                    </button>
                </form>
            </div>
        );
    }
}

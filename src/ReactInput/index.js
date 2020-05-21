import React from "react";
import propTypes from "prop-types";
import "./index.css";

class ReactInput extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }



    onKeyDownEvent = (e) => {
        // 13 回车事件
        if (e.keyCode === 13) {
            const { onSearch } = this.props;
            const { value } = this.state;
            // 判断是否有 onSearch 回调函数
            if (onSearch) {
                onSearch(value);
            }
        }
    }


    onChangeEvent = (e) => {
        this.setState({ value: e.target.value })
    }

    onClickEvent = () => {
        const { value } = this.state;
        const {onClick}=this.props;
        // 判断是否有 onClick 回调函数
        if(onClick){
            onClick(value)
        }

    }


    render() {
        return (
            <span>
                <input
                    className="rt-input"
                    placeholder="请输入内容"
                    type="text"
                    value={this.state.value}
                    onKeyDown={this.onKeyDownEvent}
                    onChange={this.onChangeEvent}
                />
                <button
                    onClick={this.onClickEvent}
                    className="rt-input-search-btn"
                >
                    搜&nbsp;&nbsp;&nbsp;&nbsp;索
                </button>
            </span>
        )
    }
}


//  组件属性校验
ReactInput.propTypes={
    onSearch:propTypes.func,
    onClick:propTypes.func,
 }
 

export default ReactInput;








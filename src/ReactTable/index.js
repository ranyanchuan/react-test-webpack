import React from "react";
import propTypes from "prop-types";
import "./index.css";

class ReactTable extends React.Component {

    // 生成表格
    getTable = () => {
      const {columns,dataSource}=this.props;
        return(
            <table className="rc-table">
                 {this.getHeadTable(columns)}
                 {this.getBodyTable(columns,dataSource)}
            </table>
        )
    }

    // 生成表头
    getHeadTable = (columns) => {

        return (
               <thead>
                    <tr >
                        {columns && columns.length>0  &&  columns.map((item)=>{
                            return (
                            <th key={item.key} className="rc-table-thead-th">{item.title}</th>
                            )
                        })}
                    </tr>
                </thead>
        )

    }

    // 生成表体
    getBodyTable = (columns,dataSource) => {

        return (
            <tbody>
                {  dataSource && dataSource.length>0 && dataSource.map((item)=>{
                    return (
                        <tr key={item.id}>
                            {columns.map((colItem)=>{
                            return ( <td 
                                key={colItem.key+item.id}
                                className="rt-table-tbody-td"
                                >{item[colItem.dataIndex]}</td>)     
                            })}
                    </tr>
                    )
                })
                }
               
            </tbody>
        )
    }

    render() {
        return this.getTable();
    }
}


//  组件属性校验
ReactTable.propTypes={
   dataSource:propTypes.array.isRequired,
   columns:propTypes.array.isRequired,
}

//  设置组件默认值
ReactTable.defaultProps={
    dataSource:[],
    columns:[],
}

export default ReactTable;








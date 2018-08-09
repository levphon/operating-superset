import React from 'react';
import ReactDOM from 'react-dom';

var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/title')

export default class Pie extends React.Component {

    constructor(props) {
        super(props)
        this.setPieOption = this.setPieOption.bind(this)
        this.initPieChart = this.initPieChart.bind(this)
    }

    initPieChart() {
        const { data } = this.props
        let myChart = echarts.init(this.refs.pieChart)
        let options = this.setPieOption(data)
        myChart.setOption(options)
    }

    componentDidMount() {
        this.initPieChart()
    }

    componentDidUpdate() {
        this.initPieChart()
    }

    render() {
        return (
            <div className="pie-react">
                <div ref="pieChart" style={{width: "40%", height: "50%"}}></div>
            </div>
        )
    }

    setPieOption(data) {
        return {
            title:{
              text:"编程语言",
              left:"center"
            },
            series : [
                {
                    name: '比例',
                    type: 'pie',
                    data: data,
                    label: {
                        normal: {
                            formatter: "{d}% \n{b}",
                        }
                    }
                }
            ]
        }
    }
}
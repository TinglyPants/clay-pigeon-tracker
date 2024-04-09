import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

export default function LineViewer({ title, dataList }) {
    return (
        <div className="m-[2rem] flex items-center flex-col border-grey-300 border-[2px] text-2xl p-2 rounded-3xl col-span-2">
            <h1>{title}</h1>
            <div>
                <VictoryChart
                    domainPadding={50}
                    theme={VictoryTheme.material}
                    height={500}
                    width={1000}
                >
                    <VictoryAxis
                        tickValues={dataList.map((datum) => datum.x)}
                        tickFormat={dataList.map((datum) => datum._id)}
                    />
                    <VictoryAxis dependentAxis />
                    <VictoryLine data={dataList} interpolation="natural" />
                </VictoryChart>
            </div>
        </div>
    );
}

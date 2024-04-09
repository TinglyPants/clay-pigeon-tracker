import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

export default function BarViewer({ title, matty, lawrie }) {
    const data = [
        { who: "Matty", total: matty },
        { who: "Lawrie", total: lawrie },
    ];

    return (
        <div className="m-[2rem] flex items-center flex-col border-grey-300 border-[2px] text-2xl p-2 rounded-3xl col-span-1">
            <h1>{title}</h1>
            <VictoryChart domainPadding={50} theme={VictoryTheme.material}>
                <VictoryAxis />
                <VictoryAxis dependentAxis />
                <VictoryBar
                    data={data}
                    x="who"
                    y="total"
                    style={{ data: { fill: "#172554" } }}
                    barRatio={0.8}
                    labels={({ datum }) => `${datum.total}`}
                    animate={{
                        duration: 1000,
                    }}
                />
            </VictoryChart>
        </div>
    );
}

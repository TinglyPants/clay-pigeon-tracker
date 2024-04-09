import { VictoryPie } from "victory";

export default function PieViewer({ title, percentage }) {
    return (
        <div className="m-[2rem] flex items-center flex-col border-grey-300 border-[2px] text-2xl p-2 rounded-3xl col-span-1">
            <h1>{title}</h1>
            <div className="size-full">
                <VictoryPie
                    colorScale={["#172554", "#80848E"]}
                    data={[
                        { x: `Hit (${percentage.toFixed(2)}%)`, y: percentage },
                        { x: "Miss", y: 100 - percentage },
                    ]}
                    width={500}
                />
            </div>
        </div>
    );
}

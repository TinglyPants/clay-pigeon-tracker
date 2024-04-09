import { useState } from "react";
import BarViewer from "./components/main/BarViewer";
import LineViewer from "./components/main/LineViewer";
import MainContent from "./components/main/MainContent";
import PieViewer from "./components/main/PieViewer";
import scores from "./scores.json";

export default function App() {
    const [limitRecent, setLimitRecent] = useState(false);
    const [shootCount, setShootCount] = useState(scores.scores.length);

    let totalClays = 0;
    let mattyTotal = 0;
    let lawrieTotal = 0;
    let mattyList = [];
    let lawrieList = [];

    let iter = 0;

    scores.scores.forEach((shoot, index) => {
        if (limitRecent && index < scores.scores.length - shootCount) {
            return;
        }
        iter++;
        totalClays += shoot.totalClays;
        mattyTotal += shoot.mattyHit;
        mattyList.push({
            label: (shoot.mattyHit / shoot.totalClays).toFixed(2).toString(),
            y: shoot.mattyHit / shoot.totalClays,
            x: iter,
            _id: shoot.date,
        });
        lawrieTotal += shoot.lawrieHit;
        lawrieList.push({
            label: (shoot.lawrieHit / shoot.totalClays).toFixed(2).toString(),
            y: shoot.lawrieHit / shoot.totalClays,
            x: iter,
            _id: shoot.date,
        });
    });

    console.log(lawrieList);

    return (
        <>
            <MainContent>
                <BarViewer
                    title="Total Hits"
                    matty={mattyTotal}
                    lawrie={lawrieTotal}
                />
                <BarViewer
                    title="Total Clays Attempted"
                    matty={totalClays}
                    lawrie={totalClays}
                />
                <PieViewer
                    title="Matty Percent Hit"
                    percentage={(100 * mattyTotal) / totalClays}
                />
                <PieViewer
                    title="Lawrie Percent Hit"
                    percentage={(100 * lawrieTotal) / totalClays}
                />
                <LineViewer title="Matty Percent Hit" dataList={mattyList} />
                <LineViewer title="Lawrie Percent Hit" dataList={lawrieList} />
            </MainContent>
            <button
                onClick={() => {
                    setLimitRecent(!limitRecent);
                }}
            >
                Limit Recent? :
            </button>
            <input
                type="number"
                onChange={(e) => setShootCount(e.target.value)}
            />
        </>
    );
}

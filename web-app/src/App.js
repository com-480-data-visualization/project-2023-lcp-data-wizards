import './App.css';
import {
    Header,
    Navbar,
    FigureMap,
    FigureVulnerabilities,
    FigureTerrestrial,
    FigureMarine,
    FigureTree,
    FigureDistrib,
    FigureTreeCountry,
    FigureTreeWorld
} from "./components";
import React from "react";
import {useState} from "react";
import iucn_red_list from "./data/iucn_red_list.csv";
import countryIucnCatRepartition from "./data/country_iucn_cat_repartition.json";
import countrySpeciesRepartition from "./data/country_species_repartition.json";

function App() {

    const [selectedYear, setSelectedYear] = useState(2020);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [iucnRedListCSV] = useState(iucn_red_list);


    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <div id="content">
                <div className='figures' id="map_related_figures">
                    <div>
                        <FigureMap selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} selectedYear={selectedYear} iucnRedListCSV={iucnRedListCSV}/>
                    </div>
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <FigureDistrib countryIucnCatRepartition={countryIucnCatRepartition} selectedCountry={selectedCountry}/>
                                </td>
                                <td>
                                    <FigureVulnerabilities countrySpeciesRepartition={countrySpeciesRepartition} selectedCountry={selectedCountry}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='figures' id="protected_areas_figures">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <FigureTerrestrial/>
                            </td>
                            <td>
                                <FigureMarine/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='figures' id="species_tree_figures">
                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan="2">
                                <FigureTree/>
                            </td>
                            <td>
                                <FigureTreeWorld/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FigureTreeCountry/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from 'react';

const About = () => {
    return (
        <div>
                <p>
                    The generative process starts with an empty grid. In several iterations, bunch of numbers is added to the grid randomly, and these are validated once sudoku solver confirms the current grid still has a solution. In case of 2 or more solutions algorithms continues, if solution is unique it stops.
                </p>
                <p>
                    Sudoku solver works in a matter of one milisecond, using <a href="https://en.wikipedia.org/wiki/Knuth%27s_Algorithm_X">Dancing Links Algorithm</a> (known also as Algorithm X) decribed by Donald Knuth. Overall process should take about 30 – 200 ms on PC and 50 – 1000 ms on mobile device, depending on computational power.
                </p>
                <p>
                        Source code for this page (not necessarily the latest version) is <a href="https://github.com/nessiaem/sudoku">published on github</a>. Also, there is a <a href="https://www.npmjs.com/package/dancing-links-algorithm">npm package</a> available containing my implementation of Dancing Links Algorithm, which can be used to solve various problems.
                </p>
                <p>
                        For the lack of time (and wit), the generative algorithm (and especially sudoku minimizing algorithm) are not as fast as is their potential to be. Feel free to inspire from this and make it better. If you feel the need, do not hesitate to contact me on: robert.druska@gmail.com
                </p>
        </div>
    )
}

export default About;
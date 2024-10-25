document.getElementById('madLibsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const adjective1 = document.getElementById('adjective1').value;
    const adjective2 = document.getElementById('adjective2').value;
    const noun1 = document.getElementById('noun1').value;
    const friend1 = document.getElementById('friend1').value;
    const emotion1 = document.getElementById('emotion1').value;
    const verb1 = document.getElementById('verb1').value;
    const place1 = document.getElementById('place1').value;
    const place2 = document.getElementById('place2').value;
    const color1 = document.getElementById('place2').value;



    const story = `On a ${adjective1} Halloween night in the${place1}, the crewmates were ${verb1} to
complete their tasks. Suddenly, a ${adjective2} shadow appeared, 
and everyone gasped at the sight of the ${friend1}. 
The crewmates had to ${verb1} fast to avoid being caught!
They gathered in${place2}, where they noticed ${color1} ${noun1} lurking
in the darkness. The air was filled with a  ${emotion1} feeling
as they tried to figure out who the imposter was.`;
    document.getElementById('story').innerText = story;
});

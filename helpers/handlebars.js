module.exports = {
    seleccionarSkills: (seleccionadas = [], opciones) => {
        const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox',
            'JavaScript', 'jQuery', 'Node', 'VueJS','ReactJS',
            'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript',
            'PHP','Laravel', 'Symfony', 'Phyton', 'Django', 'ORM',
            'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress'];

        let html = '';
        skills.forEach(skill => {
            html += `<li>${sill}</li>`;
        });

        return opciones.fn().html = html;
    }
}
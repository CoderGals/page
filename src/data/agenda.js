const agenda = {
    'day-1': {
        'label': 'Day 1 - Friday 11.12.2020',
        'slots': [
            {
                'time': '12: 00 - 13:00',
                'activities': [
                    {
                        'title': 'Opening Ceremony',
                        'description': 'Welcoming words by the organizers...!',
                        'long_description': 'We will have a short session for our welcome ceremony. We will start with a short introduction from the organizing team, a presentation of the main agenda, and expected final submission.\n' +
                            '\n' + '1.1 Stakeholder involvement: Introduction of supporting individuals and institutions.\n'+
                            '\n' + '1.2 Mentoring: Introduction of mentors, their area of expertise, and their role during the hackathon'},
                    // {
                    //     'title': 'Opening Ceremony e dyta',
                    //     'description': 'Welcoming words by the organizers, and kick off!',
                    //     'long_description': 'looong description....'
                    // },
                    // {
                    //     'title': 'Opening Ceremony e treta',
                    //     'description': 'Welcoming words by the organizers, and kick off!',
                    //     'long_description': 'looong description....'
                    // }
                ]
            },
            {
                'time': '12:30',
                'activities': [
                    {
                        'title': 'Speaker Session',
                        'description': 'We will enjoy some time hearing from one of our supporters...',
                        'long_description': 'This section will be dedicated to 15 - 20min speech of Agon Avdimetaj on ...'
                    },
                    {
                        'title': 'Set Up:',
                        'description': 'Introduction to projects'
                    }
                ]
            },
            {
                'time': '12: 00 - 13:00',
                'activities': [
                    {
                        'title': 'Another one #',
                        'description': 'Welcoming words by the organizers, and kick off!'
                    }
                ]
            },
            {
                'time': '12: 00 - 13:00',
                'activities': [
                    {
                        'title': 'And this one #',
                        'description': 'Welcoming words by the organizers, and kick off!'
                    }
                ]
            }
        ]
    },
    'day-2': {
        'label': 'Day 2 - Saturday 12.12.2020',
        'slots': [
            {
                'time': '12: 00 - 13:00',
                'activities': [
                    {
                        'title': 'Opening Ceremony #day 2',
                        'description': 'Welcoming words by the organizers, and kick off!'
                    },
                    {
                        'title': 'Another activity #day 2 12: 00 - 13:00',
                        'description': 'Welcoming words by the organizers, and kick off!'
                    },
                ]
            },
            {
                'time': '16: 00 - 17:00',
                'activities': [
                    {
                        'title': 'Another activity #day 2 ###16: 00 - 17:00',
                        'description': 'Welcoming words by the organizers, and kick off!'
                    },
                ]
            }
        ]
    },
    'day-3': {
        'label': 'Day 3 - Sunday 13.12.2020',
        'slots': [
            {
                'time': '10: 00 - 13:00',
                'activities': [
                    {
                        'title': 'Opening Ceremony #day 3',
                        'description': 'Welcoming words by the organizers, and kick off!'
                    },
                ]
            },

        ]
    }
};
export default agenda;

const DEFAULT_SELECTED = 'day-1';
export {DEFAULT_SELECTED};
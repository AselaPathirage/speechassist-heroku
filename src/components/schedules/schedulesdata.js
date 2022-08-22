// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        id: 0,
        title: 'Schedule 01',
        patient: 'Asela Pathirage',
        completed: false,
        weeks: [
            {
                id: 0,
                title: 'week 01 schedule',
                date: new Date(2022, 3, 10),
                delay: 40,
                frequency: 20,
                tasks: [
                    {
                        id: 0,
                        title: 'Public speaking',
                        treatmentMethod: "DAF",
                        treatmentvalue: "200",
                        audio:true,
                    },
                    {
                        id: 1,
                        title: 'Read a book',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                    {
                        id: 2,
                        title: 'Speak to self',
                        treatmentMethod: "FAF",
                        treatmentvalue: "45",
                        audio:true,
                    },
                ]
            },
            {
                id: 1,
                title: 'week 02 schedule',
                date: new Date(2022, 3, 17),
                delay: 30,
                frequency: 10,
                tasks: [
                    {
                        id: 0,
                        title: 'Public speaking',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:false,
                    },
                    {
                        id: 1,
                        title: 'Read a book',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:false,
                    },
                    {
                        id: 2,
                        title: 'Speak to self',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:false,
                    },
                ]
            },
            {
                id: 2,
                title: 'week 03 schedule',
                date: new Date(2022, 3, 24),
                delay: 10,
                frequency: 10,
                tasks: [
                    {
                        id: 0,
                        title: 'Public speaking',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:false,
                    },
                    {
                        id: 1,
                        title: 'Read a book',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:false,
                    },
                    ]
            },

        ]
    },
    {
        id: 0,
        title: 'Schedule 02',
        patient: 'Yasith Samaradivakara',
        completed: true,
        weeks: [
            {
                id: 0,
                title: 'week 01 schedule',
                date: new Date(2022, 3, 10),
                delay: 40,
                frequency: 20,
                tasks: [
                    {
                        id: 0,
                        title: 'Public speaking',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                    {
                        id: 1,
                        title: 'Read a book',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                    {
                        id: 2,
                        title: 'Speak to self',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                ]
            },
            {
                id: 1,
                title: 'week 02 schedule',
                date: new Date(2022, 3, 17),
                delay: 30,
                frequency: 10,
                tasks: [
                    {
                        id: 0,
                        title: 'Public speaking',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                    {
                        id: 1,
                        title: 'Read a book',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                    {
                        id: 2,
                        title: 'Speak to self',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                ]
            },
            {
                id: 2,
                title: 'week 03 schedule',
                date: new Date(2022, 3, 24),
                delay: 10,
                frequency: 10,
                tasks: [
                    {
                        id: 0,
                        title: 'Public speaking',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                    {
                        id: 1,
                        title: 'Read a book',
                        treatmentMethod: "DAF",
                        treatmentvalue: "100",
                        audio:true,
                    },
                    ]
            },

        ]
    },

]
export const nodes = {
  ganggang: {
    parent: {
      name:  'Ganggang Miraflor',
      spouse: 'Andres Calumpang',
      description: `Lorem Ipsum is simply dummy text`,
      link: '/'
    },
    offspring: [
      {
        name: 'Mike Calumpang',
        nickname: 'Mike',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/mike'
      },
      {
        name: 'Alex Calumpang',
        nickname: 'Alex',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/alex'
      },
      {
        name: 'Ida del Olmo',
        nickname: 'Ida',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/ida'
      },
      {
        name: 'Andrews Calumpang',
        nickname: 'Andrews',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/andrews'
      },
      {
        name: 'Nel Calumpang',
        nickname: 'Nellie',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/nellie'
      },
      {
        name: 'Rodolfo Calumpang',
        nickname: 'Braddock',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/braddock'
      },   
    ]
  },
  andrews: {
    parent: {
      name:  'Andrews Calumpang',
      spouse:  'Virginia Teves',
      description: `Lorem Ipsum is simply dummy text`,
      link: '/'
    },
    offspring: [
      {
        name: 'Virginia Proulx',
        nickname: 'Baby Jing',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/babyjing'
      },
      {
        name: 'Andre Calumpang',
        nickname: 'Bobong',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/bobong'
      },
      {
        name: 'Josephine Bulandres',
        nickname: 'Josie',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/josie'
      },
      {
        name: 'Ricardena Calumpang',
        nickname: 'Rica',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/rica'
      },
      {
        name: 'Don Rey Calumpang',
        nickname: 'Don',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/donrey'
      },
      {
        name: 'Joselita Flordeliz',
        nickname: 'Josette',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/josette'
      },
      {
        name: 'Carina Orozco',
        nickname: 'Carina',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/carina'
      },   
      {
        name: 'Michiko de Leon',
        nickname: 'Chikoy',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/michiko'
      },   
      {
        name: 'Rembrandt Calumpang',
        nickname: 'Brandt',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/rembrandt'
      },   
    ]
  },
  braddock: {
    parent: {
      name:  'Rodolfo Calumpang',
      spouse:  'Alice Flores',
      description: `Lorem Ipsum is simply dummy text`,
      link: '/'
    },
    offspring: [
      {
        name: 'Dovan Calumpang',
        nickname: 'Dovan',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/dovan'
      },
      {
        name: 'Fatima de Mesa',
        nickname: 'Timay',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/fatima'
      },    
    ]
  },
  michiko: {
    parent: {
      name: 'Michiko Calumpang',
      spouse: 'Ceasar de Leon',
      description: 'Lorem Ipsum',
      link: '/andrews'
    },
    offspring: [
      {
        name: 'Angel Antonio de Leon',
        nickname: 'Anton',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/michiko'
      },
      {
        name: 'Rafael de Leon',
        nickname: 'Paeng',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/michiko'
      },         
    ]
  },
  babyjing: {
    parent: {
      name: 'Virginia Calumpang',
      spouse: 'Francois Proulx',
      description: 'Lorem Ipsum',
      link: '/andrews'
    },
    offspring: [        
    ]
  },
  bobong: {
    parent: {
      name: 'Andre Calumpang',
      spouse: 'Joy Something',
      description: 'Lorem Ipsum',
      link: '/andrews'
    },
    offspring: [  
      {
        name: 'Pamela Something',
        nickname: 'Pam',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/bobong'
      },
      {
        name: 'Carlo Something',
        nickname: 'Carlo',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/bobong'
      },         
    ]
  },
  josie: {
    parent: {
      name: 'Josephine Calumpang',
      spouse: 'Cromwell Bulandres',
      description: 'Lorem Ipsum',
      link: '/andrews'
    },
    offspring: [  
      {
        name: 'Jay Bulandres',
        nickname: 'Jay',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/jay'
      },
      {
        name: 'Joanna Bulandres',
        nickname: 'Jo',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/joanna'
      },    
      {
        name: 'Joseph Noel Bulandres',
        nickname: 'Jonjon',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/jonjon'
      },       
      {
        name: 'Cromwell Bulandres Jr',
        nickname: 'Junior',
        description: `Lorem Ipsum is simply dummy text`,
        link: '/junior'
      },  
    ]
  }
};

export const routes = [
  '/mike',
  '/alex',
  '/ida',
  '/andrews',
  '/nellie',
  '/braddock',
  '/babyjing',
  '/bobong',
  '/josie',
  '/rica',
  '/donrey',
  '/josette',
  '/carina',
  '/michiko',
  '/rembrandt',
  '/dovan',
  '/fatima',
  '/jay',
  '/joanna',
  '/jonjon',
  '/junior'
];

export const nodeall = [
  {
    name: 'Toy One',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '1',
    link: '/one'
  },
  {
    name: 'Toy Two',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '2',
    link: '/two'
  },
  {
    name: 'Toy Three',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '3',
    link: '/three'
  },
  {
    name: 'Toy Four',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '4',
    link: '/four'
  },
  {
    name: 'Toy Five',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '5',
    link: '/five'
  },
  {
    name: 'Toy Six',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '6',
    link: '/six'
  },
  {
    name: 'Toy Seven',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '7',
    link: '/seven'
  },
  {
    name: 'Toy Eight',
    description: `Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s.`,
    image: '8',
    link: '/eight'
  },
];

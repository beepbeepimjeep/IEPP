const mysql = require('mysql');

const createFunction = async (req, res) => {
    const connection = mysql.createConnection({
        host: '34.129.245.42',
        port: 3306,
        user: 'root',
        password: '012ebecbd6b870d3',
        database: '5120finalproject',
    });

    const articles = [
        {
            ID: '1',
            Title: 'Teenagers’ Awareness and Their Experiences of Phishing Attacks: A Study of Nigerian Secondary Schools.',
            Desc: 'Investigated the awareness and experiences of Nigerian teenagers regarding phishing attacks in secondary schools.',
            URL: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7781741/',
            Type: 'Phishing'
        },
        {
            ID: '2',
            Title: 'Investigating Teenagers’ Ability to Detect Phishing Messages',
            Desc: 'Young people are increasingly becoming responsible for the security of their devices, yet do not appear to receive formal instruction on how to protect themselves online.',
            URL: 'https://ieeexplore.ieee.org/abstract/document/9229735',
            Type: 'Phishing'
        },
        {
            ID: '3',
            Title: 'Exploring the Effectiveness of Online Phishing Awareness for Young Adults.',
            Desc: 'Investigates the effectiveness of online phishing awareness training for young adults, and how it can help reduce the risk of falling victim to phishing attacks.',
            URL: 'https://link.springer.com/chapter/10.1007/978-3-319-67008-9_2',
            Type: 'Phishing'
        },
        {
            ID: '4',
            Title: 'A survey of emerging threats in cybersecurity',
            Desc: 'The exponential growth of the Internet interconnections has led to a significant growth of cyber attack incidents often with disastrous and grievous consequences.',
            URL: 'https://www.sciencedirect.com/science/article/pii/S0022000014000178',
            Type: 'Virus and malware removal'
        },
        {
            ID: '5',
            Title: 'Social Engineering Attacks: A Survey',
            Desc: 'The advancements in digital communication technology have made communication between humans more accessible and instant.',
            URL: 'https://www.mdpi.com/1999-5903/11/4/89',
            Type: 'Virus and malware removal'
        },
        {
            ID: '6',
            Title: 'Internet Safety for Kids: How to Protect Your Child from the Top 7 Dangers They Face Online',
            Desc: 'The internet can be a dangerous neighborhood for everyone, but children and teens are especially vulnerable.',
            URL: 'https://usa.kaspersky.com/resource-center/threats/top-seven-dangers-children-face-online',
            Type: 'Virus and malware removal'
        },
        {
            ID: '7',
            Title: 'Identity Theft and Identity Fraud',
            Desc: 'Identity theft and fraud, including common methods and prevention tips.',
            URL: 'https://www.justice.gov/criminal-fraud/identity-theft/identity-theft-and-identity-fraud',
            Type: 'Identity theft'
        },
        {
            ID: '8',
            Title: 'Why you Should Watch Out for Teen Identity Theft',
            Desc: ' No one is immune to identity theft, even young children and teens. Typically, criminals target those who are less likely to be aware of teen identity theft, so criminals can ride the money train for as long as possible.',
            URL: 'https://www.idstrong.com/sentinel/why-you-should-watch-out-for-teen-identity-theft/',
            Type: 'Identity theft'
        },
        {
            ID: '9',
            Title: 'Youth and Cybercrime: The Effects of Identity Theft on Young People',
            Desc: 'Examines the impact of identity theft on youth, including emotional distress and financial consequences',
            URL: 'https://www.aic.gov.au/publications/tandi/tandi469',
            Type: 'Identity theft'
        },
        {
            ID: '10',
            Title: 'Cyberbullying Victimization and Mental Health in Adolescents and the Moderating Role of Family Dinners',
            Desc: 'The relationship between cyberbullying and mental health in adolescents, and the potential protective effect of family dinners.',
            URL: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6525071/',
            Type: 'Bullying and harassment'
        },
        {
            ID: '11',
            Title: 'Cyberbullying Victimization and Problematic Internet Use Among Adolescents: The Moderating Effect of Peer Support',
            Desc: 'Peer support may mitigate the negative effects of cyberbullying and problematic internet use in adolescents. ',
            URL: 'https://www.researchgate.net/publication/342337761_Cyberbullying_victimization_and_problematic_Internet_use_among_Chinese_adolescents_Longitudinal_mediation_through_mindfulness_and_depression',
            Type: 'Bullying and harassment'
        },
        {
            ID: '12',
            Title: 'Online Harassment, School Violence, and Perceived School Safety: An Examination of Their Association with Mental Health Outcomes Among Adolescents in Taiwan',
            Desc: 'The relationship between online harassment, school violence, perceived school safety, and mental health outcomes among adolescents in Taiwan.',
            URL: 'https://www.mdpi.com/1660-4601/15/8/1631',
            Type: 'Bullying and harassment'
        },
        {
            ID: '13',
            Title: 'Password Security: A Case Study of Online Habits',
            Desc: 'Password security among young adults and highlights the need for better education and awareness of safe online practices.',
            URL: 'https://www.jstor.org/stable/26296820',
            Type: 'Password'
        },
        {
            ID: '14',
            Title: 'Teens, Social Media & Technology Overview 2015',
            Desc: 'The online habits and behaviors of teenagers, including their password security practices',
            URL: 'https://www.pewresearch.org/internet/2015/04/09/teens-social-media-technology-2015/',
            Type: 'Password'
        },
        {
            ID: '15',
            Title: 'Two studies of the perceptions of risk, benefits and likelihood of undertaking password management behaviours',
            Desc: 'Passwords remain the most common form of authentication in the digital world. People have increasing numbers of passwords, and many people undertake risky password management behaviours such as re-using passwords, writing them down and sharing them.',
            URL: 'https://www.tandfonline.com/doi/full/10.1080/0144929X.2021.2019832',
            Type: 'Password'
        }
    ];

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);

        // Create table query
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS articleList (
        ID INT,
        Title VARCHAR(255),
        \`Desc\` VARCHAR(255),
        URL VARCHAR(255),
        Type VARCHAR(255)
      );
    `;
        /*const query = `
      DROP TABLE IF EXISTS articleList;
    `;*/
        const insertQueries = articles.map((article) => {
            return `
        INSERT INTO articleList (ID, Title, \`Desc\`, URL, Type)
        VALUES ('${article.ID}', '${article.Title}', '${article.Desc}', '${article.URL}', '${article.Type}');
      `;
        });

        connection.query(createTableQuery, (err) => {
            if (err) {
                console.error('Error creating table: ' + err.stack);
                return;
            }
            console.log('Table deleted');

            // Execute the insert queries in a loop
            const executeInsertQueries = () => {
                if (insertQueries.length === 0) {
                    console.log('All articles inserted');
                    connection.end(); // Move connection.end() here
                    return;
                }

                const insertQuery = insertQueries.shift();
                connection.query(insertQuery, (err) => {
                    if (err) {
                        console.error('Error inserting article: ' + err.stack);
                        return;
                    }
                    console.log('Article inserted');
                    executeInsertQueries();
                });
            };

            executeInsertQueries();
        });
    });
};



module.exports = {
    createFunction
}

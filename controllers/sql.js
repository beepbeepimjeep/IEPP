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
            Title: 'Phishing in a Teenager’s World: An Analysis of Phishing Websites Targeting Teenagers',
            Desc: 'Phishing websites that specifically target teenagers and the methods used to trick them into providing sensitive information',
            URL: 'https://www.sciencedirect.com/science/article/pii/S2405452618305229',
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
            Title: 'Teens, Tweens and Technology 2015',
            Desc: 'the online behavior of teens and tweens, and the risks they face from malware and other threats.',
            URL: 'https://www.mcafee.com/blogs/consumer/family-safety/teens-tweens-technology-2015-report/',
            Type: 'Virus and malware removal'
        },
        {
            ID: '5',
            Title: 'Kids and Malware: What You Need to Know',
            Desc: 'The prevalence of malware and other online threats that kids face, and how parents can protect their children.',
            URL: 'https://us.norton.com/internetsecurity-kids-safety-kids-and-malware-what-you-need-to-know.html',
            Type: 'Virus and malware removal'
        },
        {
            ID: '6',
            Title: 'The Dangers of Malware: Why Your Teenager Needs to Be Protected',
            Desc: 'The risks of malware to teenagers, and offering tips on how parents can keep their children safe online.',
            URL: 'https://www.bark.us/blog/dangers-malware-teenager-needs-protected/',
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
            Title: 'Identity Theft: A Comprehensive Overview',
            Desc: 'Various types of identity theft, how to detect it, and steps to take if victimized.',
            URL: 'https://www.ftc.gov/system/files/documents/reports/identity-theft-comprehensive-overview-report.pdf',
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
            Title: 'Prevalence and Patterns of Sexting Among Ethnic, Racial, and Sexual Minorities',
            Desc: 'The prevalence and patterns of sexting among adolescents from ethnic, racial, and sexual minority groups, and the potential negative consequences of sexting.',
            URL: 'https://journals.sagepub.com/doi/abs/10.1177/1557988317714155',
            Type: 'Bullying and harassment'
        },
        {
            ID: '12',
            Title: 'Online Harassment, School Violence, and Perceived School Safety: An Examination of Their Association with Mental Health Outcomes Among Adolescents in Taiwan',
            Desc: 'The relationship between online harassment, school violence, perceived school safety, and mental health outcomes among adolescents in Taiwan.',
            URL: 'https://us.norton.com/internetsecurity-kids-safety-kids-and-malware-what-you-need-to-know.html',
            Type: 'https://www.mdpi.com/1660-4601/15/8/1631'
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
            console.log('Table created');

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

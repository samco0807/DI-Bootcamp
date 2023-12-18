CREATE TABLE tweets (
	id serial PRIMARY KEY,
	username VARCHAR ( 50 )  NOT NULL
	tweet_content VARCHAR (1000) NOT NULL,
	tweet_date DATE NOT NULL,
	
);

CREATE TABLE sentiments (
	id serial PRIMARY KEY,
	sentiment VARCHAR ( 50 )  NOT NULL
);


INSERT INTO 
    tweet (username, tweet_content, tweet_date)
VALUES
    (, ,),
    (,,),
    (,,),
    (,,);
	
	
SELECT tweet_content=''
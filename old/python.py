import re
import database
import ntlk

from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer, WordNetLemmatizer

# Preprocess Data:
# Clean and preprocess the text data by removing unnecessary elements (e.g., URLs, mentions, special characters).

def clean_text(text):
    # Remove URLs
    text = re.sub(r'http\S+', '', text)
    # Remove mentions
    text = re.sub(r'@\w+', '', text)
    # Remove special characters
    text = re.sub(r'[^\w\s]', '', text)
    return text

clean_text(text=tweet_content)

# Tokenize and perform stemming or lemmatization of tweets

tweet=''
tokens = word_tokenize(tweet)

stemmer = PorterStemmer()
lemmatizer = WordNetLemmatizer()

stemmed_words = [stemmer.stem(token) for token in tokens]
lemmatized_words = [lemmatizer.lemmatize(token) for token in tokens]

print("Original Text: ", tweet)
print("Tokenized Text: ", tokens)
print("Stemmed Text: ", stemmed_words)
print("Lemmatized Text: ", lemmatized_words)
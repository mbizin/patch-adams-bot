# Patch Adams Bot

## Authors

- [Amanda Coelho](https://www.linkedin.com/in/amanda-coelho-69737151/) - Icaro Tech
- [Grazielli Merchiolli](https://www.linkedin.com/in/grazimerchiolli/) - Icaro Tech
- [Murilo Bizin](https://www.linkedin.com/in/murilobizin/) - Icaro Tech

## Contents

1. [Overview](#overview)
2. [Video](#video)
3. [The idea](#the-idea)
4. [How it works](#how-it-works)
5. [Diagrams](#diagrams)
6. [Documents](#documents)
7. [Datasets](#datasets)
8. [Technology](#technology)
9. [Disclosures](#disclosures)
10.[License](#license)

## Overview

### What's the problem?

A pandemic outbreak all over the world, this changes our lives forever and nothing else is more important than stay safe, stay at home. But, it means some sacrifices... people can't go to work, can't go outside, can't enjoy the nature, can't be with people they care about and there is many others side effects. People are feeling loneliness, anxiety, fear, fragility and panic, a lot of this feelings are caused by inaccurate information or misunderstanding.

### How can technology help ?

We believe technology is critical to continue to take care of people, especially AI based technologies, because those technologies enable us to interacting with others and even to be closer through human kind dialog interfaces, no matter if by text, voice or visual. We've developed Patch Adams Bot to take care of people, focusing our efforts on how they consume informations and what is really relevant for us to overcome this heath crisis.

## Video

[![Call for Code Solution: Patch Adams Bot](https://img.youtube.com/vi/EVfvIT4uGwk/0.jpg)](https://youtu.be/EVfvIT4uGwk)

## The idea

Develop a virtual assistant capable of help people to take care of thenselfs and others by acquiring knowledge about COVID-19 and avoiding fake news, testing knowledge and having fun while interacting with it. Beyond getting tips of activities to do at home, enjoying the family, your pets and reducing bad feelings like anxiety and panic.

Watson Assistant was used to create a human kind dialog interface relying on trusted sources and our inspiration for the persona has been Dr. Hunter Adams, who had his story turned into a film starring Robin Williams at 1998, Patch Adams. By the way, we get in touch with his team to told about our project and they gave us support and also allowed us to name our bot as Patch Adams.

To improve engagement and also achieve person with visual disabilities we've plans to enable voice interaction using Watson Speech to Text and Watson Text to Speech. We also want to integrate Patch with Watson Visual Recognition to check if somebody is using the right mask when leave home is needed. A further step would be add geolocation to help users to find a better place to get medical assistance or even buy medicine.

Currently Patch Adams Bot can:
- Clarify doubts about COVID-19 (origin, symptoms, infection, treatment...) and the differences comparing to common flu, based only on trusted information
- Provide updated statistics about the number of cases on the globe and by country
- Guide how to prevent on many situations (at home, at hospitals, at a trip...) 
- Inform about medical centers treating only COVID-19
- Make suggestions, according user profile and health recommendations, like what kind activities to kids, to elders, to adults and pets do at home during quarantine
- Guide what to do when user need to leave home or receiving packages
- Assist users to take care of yourself and others, even when are somebody with COVID-19 recovering at your home
- Teaching how to deal with and the most common fake news in Brazil
- Test your knowledge by a Quiz! with scores that entertain you and helps to raise awareness about fake news

## How it works

## Diagrams

### Current Patch Adams Bot Architecture

![Architecture Diagram](/assets/diagrams/arch-as-is.png)

1. User search for Patch Adams Bot at Facebook Messenger or start a new chat by following link: ![Messenger Patch Adams Bot](m.me/PatchAdamsBot)
2. User asks a question to Patch.
3. Facebook Messenger App calls the Watson Assistant service hosted in IBM Cloud.
4. Watson Assistant uses natural language understanding and machine learning to extract entities and intents of the user question.
5. Source COVID-19 FAQ information from trusted WHO data
6. IBM Cloud Function calls the APIs services running outside IBM Cloud to get statistics.
7. Watson Assistant replies to the Facebook Messenger application.
8. Facebook Messenger app displays the chat answer to the user.

### Future Patch Adams Bot Architecture

![Architecture Diagram](/assets/diagrams/arch-to-be.png)

## Documents

### Trusted sources for COVID-19 information
- [Brazilian Ministry of Health Coronavírus App](https://www.gov.br/pt-br/apps/coronavirus-sus)
- [Brazilian Ministry of Health Web Site](https://coronavirus.saude.gov.br/)
- [World Health Organization](https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019)

### Tutorials and documentation:

- [How-to guides for chatbots](https://www.ibm.com/watson/how-to-build-a-chatbot)
- [Learning path: Getting started with Watson Assistant](https://developer.ibm.com/series/learning-path-watson-assistant/)
- [Chatbot with Watson Discovery](https://github.com/IBM/watson-discovery-sdu-with-assistant)
- [Chat Bot Facebook Messenger Deployment](https://cloud.ibm.com/docs/assistant?topic=assistant-deploy-facebook)
- [Train a speech-to-text model](https://developer.ibm.com/patterns/customize-and-continuously-train-your-own-watson-speech-service/)
- [Making Programmatic Calls from Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-dialog-webhooks)
- [Watson Assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started)

## Datasets

- [covid19api](https://covid19api.com/)

## Technology

### IBM technology

- [IBM Watson Assistant](https://www.ibm.com/cloud/watson-assistant/)
- [Watson Image Recognition](https://www.ibm.com/cloud/watson-visual-recognition)
- [Watson Studio](https://www.ibm.com/watson/services/watson-studio/)
- [Watson Speech to Text](https://www.ibm.com/cloud/watson-speech-to-text)
- [Watson Text to Speech](https://www.ibm.com/cloud/watson-text-to-speech)
- [IBM Cloud Functions](https://cloud.ibm.com/functions/)

### Open source technology

- [Node.js](https://nodejs.org/en/)
- [Nginx](https://www.nginx.com)

## Disclosures

This tool is intended to provide information based on currently available WHO and other public information to help you make decisions about seeking appropriate medical care. This system is not intended for the diagnosis or treatment of disease or other conditions, including COVID-19, and you should not provide any personally identifying or private health information.

This Watson Assistant bot is populated with data that is sourced from the following resources:

- Most static responses provide information provided by Brazilian Ministry of Health and WHO: (https://www.gov.br/pt-br/apps/coronavirus-sus, https://coronavirus.saude.gov.br/ and https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019)
- Dynamic infection and death counts are sourced from Johns Hopkins University via the following API: https://www.covid19api.com/

## License

This solution starter is made available under the [GNU General Public License](LICENSE).
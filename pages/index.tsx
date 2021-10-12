import type { NextPage } from "next";
import axios from "axios";
import Head from "next/head";
import styled from "styled-components";

export const getStaticProps = async function () {
    let twitter = await fetch(process.env.VERCEL_URL + "/api/twitter").then(res => res.json());
    let github = await fetch(process.env.VERCEL_URL + "/api/github").then(res => res.json());

    return {
        props: {
            twitter,
            github,
        },
    };
};

const Home: NextPage = ({ twitter, github }: any) => {
    return (
        <Page>
            <Main>
                <SectionBox>
                    <SectionTitle>TWITTER</SectionTitle>
                    <SectionProfile>
                        <Avatar src="https://pbs.twimg.com/profile_images/1436751897155850246/32YFXEg6_200x200.jpg" />
                        <ProfileTitle>
                            Conrad Crawford <br />
                            <span style={{ color: "#bbb" }}>(@notcnrad)</span>
                        </ProfileTitle>
                    </SectionProfile>
                    <SectionInfo>
                        FOLLOWERS
                        <SectionStat color={"#2462AF"}>{twitter.followers}</SectionStat>
                    </SectionInfo>
                </SectionBox>

                <SectionBox>
                    <SectionTitle>GITHUB</SectionTitle>
                    <SectionProfile>
                        <Avatar src={github.avatar} />
                        <ProfileTitle>
                            Conrad Crawford <br />
                            <span style={{ color: "#bbb" }}>(cnrad)</span>
                        </ProfileTitle>
                    </SectionProfile>
                    <SectionContent>
                        <SectionInfo>
                            FOLLOWERS
                            <SectionStat color={"#70a7ff"}>{github.followers}</SectionStat>
                        </SectionInfo>

                        <SectionInfo>
                            FOLLOWING
                            <SectionStat color={"#3234a8"}>{github.following}</SectionStat>
                        </SectionInfo>

                        <SectionInfo>
                            STARS<SectionStat color={"#e5ff70"}>{github.stars}</SectionStat>
                        </SectionInfo>

                        <SectionInfo>
                            REPOS
                            <SectionStat color={"#7eff70"}>{github.repos}</SectionStat>
                        </SectionInfo>
                    </SectionContent>
                </SectionBox>

                <SectionBox style={{ width: "28.5rem", height: "17rem" }}>
                    <SectionTitle style={{ margin: 0 }}>DISCORD</SectionTitle>
                    <img src="https://lanyard-profile-readme.vercel.app/api/705665813994012695?hideTimestamp=true&idleMessage=Just%20chillin...&bg=181c2f&borderRadius=0.35rem" />
                </SectionBox>
            </Main>
        </Page>
    );
};

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    width: auto;
    height: auto;
    display: grid;
    grid-template-columns: 22rem 22rem;
`;

const SectionBox = styled.div`
    font-family: Open Sans;
    width: 20rem;
    height: auto;
    background: #181c2f;
    color: #fff;
    border-radius: 0.35rem;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.1));
    padding: 1.5rem;
    margin: 1rem;
`;

const SectionTitle = styled.h1`
    letter-spacing: 0.05rem;
    color: #8a8d96;
    height: auto;
    width: 100%;
    font-size: 0.85rem;
    margin: 0 0 1rem 0;
`;

const SectionProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    font-size: 1rem;
    margin-bottom: 1.5rem;
`;

const Avatar = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 0.75rem;
    margin-right: 1rem;
`;

const ProfileTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-size: 1rem;
`;

const SectionContent = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 50% 50%;
`;

const SectionInfo = styled.div`
    color: #c6c6c6;
    height: auto;
    width: auto;
    padding-right: 2rem;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-weight: 600;
`;

const SectionStat = styled.div<{ color: string }>`
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
    filter: drop-shadow(0 0 4px ${({ color }) => color});
`;

export default Home;

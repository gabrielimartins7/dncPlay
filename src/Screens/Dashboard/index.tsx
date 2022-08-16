import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { Header } from "../../Components/Header";
import {
  getFilms,
  getFilmsNowPlaying,
  getGenders,
} from "../../services/filmesApi";

import {
  ContainerScrol,
  Carousel,
  Highlight,
  Item,
  Photo,
  ContentFlat,
  ContainerFlat,
  TextFlat,
} from "./styles";

export function Dashboard() {
  const [listTrending, setlistTrending] = useState();
  const [listNow, setlistNow] = useState();
  const [listGenders, setlistGenders] = useState();

  const init = async () => {
    const response = await getFilms(1);
    setlistTrending(response.data.results);
  };
  const getFilmsNow = async () => {
    const response = await getFilmsNowPlaying(1);
    setlistNow(response.data.results);
  };

  const getFilmsGenders = async () => {
    const response = await getGenders(1);
    setlistGenders(response.data.results);
  };

  useEffect(() => {
    getFilmsGenders();
  }, []);
  useEffect(() => {
    getFilmsNow();
  }, []);
  useEffect(() => {
    init();
  }, []);

  return (
    <ContainerScrol>
      <Header />
      <Carousel>
        <FlatList
          data={listTrending}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({ item }) => {
            const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

            return (
              <Item>
                <Highlight
                  source={{
                    uri,
                  }}
                />
              </Item>
            );
          }}
        />
      </Carousel>
      <ContainerFlat>
        <TextFlat>Filmes</TextFlat>
        <FlatList
          data={listNow}
          horizontal
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => {
            const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

            return (
              <ContentFlat>
                <Photo
                  source={{
                    uri,
                  }}
                />
              </ContentFlat>
            );
          }}
        />
      </ContainerFlat>
      <ContainerFlat>
        <TextFlat>Series</TextFlat>
        <FlatList
          data={listGenders}
          horizontal
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => {
            const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

            return (
              <ContentFlat>
                <Photo
                  source={{
                    uri,
                  }}
                />
              </ContentFlat>
            );
          }}
        />
      </ContainerFlat>
      <ContainerFlat>
        <TextFlat>Animes</TextFlat>
        <FlatList
          data={listNow}
          horizontal
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => {
            const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

            return (
              <ContentFlat>
                <Photo
                  source={{
                    uri,
                  }}
                />
              </ContentFlat>
            );
          }}
        />
      </ContainerFlat>

      <ContainerFlat>
        <TextFlat>Assistir novamente</TextFlat>
        <FlatList
          data={listTrending}
          horizontal
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => {
            const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

            return (
              <ContentFlat>
                <Photo
                  source={{
                    uri,
                  }}
                />
              </ContentFlat>
            );
          }}
        />
      </ContainerFlat>
    </ContainerScrol>
  );
}

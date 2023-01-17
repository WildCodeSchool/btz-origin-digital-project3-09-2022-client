"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "../../context/UserContext";

interface IProps {
  id: string;
}

export default function Favorite({ id }: IProps) {
  const { user } = useAuth();
  const [favorite, setFavorite] = useState(false);

  const isVideoFavorite = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favorites/isFavorite/${user.id}/${id}` ||
        "apiurl",
      {
        credentials: "include",
      }
    );
    const isFavorite = await res.json();
    return isFavorite;
  };

  const addVideoFavorite = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favorites/add/${user?.id}/${id}/` ||
        "apiurl",
      {
        credentials: "include",
        body: JSON.stringify({
          userId: user?.id,
          videoId: id,
        }),
        method: "POST",
      }
    );
    return res.json();
  };

  const removeVideoFavorite = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favorites/remove/${user.id}/${id}/` ||
        "apiurl",
      {
        credentials: "include",
        body: JSON.stringify({
          userId: user.id,
          videoId: id,
        }),
        method: "POST",
      }
    );
    return res.json();
  };

  useEffect(() => {
    if (user) {
      isVideoFavorite().then((res) => setFavorite(res));
    }
  }, [favorite]);

  return (
    <div>
      {favorite === true ? (
        <Image
          className="cursor-pointer"
          src="/full_heart_logo.svg"
          alt="logo share"
          width="40"
          height="40"
          onClick={() => {
            removeVideoFavorite();
            setFavorite(false);
          }}
        />
      ) : (
        <Image
          className="cursor-pointer"
          src="/empty_heart_logo.svg"
          alt="logo share"
          width="40"
          height="40"
          onClick={() => {
            addVideoFavorite();
            setFavorite(true);
          }}
        />
      )}
    </div>
  );
}

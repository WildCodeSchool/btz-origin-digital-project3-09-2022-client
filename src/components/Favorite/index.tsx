/* eslint-disable @typescript-eslint/no-non-null-assertion */

"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";

interface IProps {
  id: string;
}

export default function Favorite({ id }: IProps) {
  const { user } = useAuth();
  const [favorite, setFavorite] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isVideoFavorite = async () => {
    const { data } = await axiosInstance.get(`/favorites/${id}/isFavorite`);

    return data;
  };

  const addVideoFavorite = async () => {
    const { data } = await axiosInstance.post(
      `/favorites/add`,
      JSON.parse(JSON.stringify({ videoId: id }))
    );

    startTransition(() => {
      router.refresh();
    });

    return data;
  };

  const removeVideoFavorite = async () => {
    const { data } = await axiosInstance.post(
      `/favorites/remove`,
      JSON.parse(JSON.stringify({ videoId: id }))
    );

    startTransition(() => {
      router.refresh();
    });

    return data;
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

"use client";

import { useState } from "react";
import { animate } from "animejs";
import { getAnonId } from "../lib/anon";

export type MoodEntry = {
  id: string;
  session_id: string;
  mood: string;
  note: string;
  time: number;
};

type Props = {
  onSaved: (data: MoodEntry) => void;
};

export default function CheckInForm({ onSaved }: Props) {
  const [note, setNote] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { key: "happy", emoji: "😀", label: "Happy" },
    { key: "anxious", emoji: "😟", label: "Anxious" },
    { key: "sad", emoji: "😢", label: "Sad" },
    { key: "angry", emoji: "😡", label: "Angry" },
    { key: "tired", emoji: "😴", label: "Tired" }
  ];

  function submit(mood: string) {
    const data: MoodEntry = {
      id: crypto.randomUUID(),
      session_id: getAnonId(),
      mood,
      note,
      time: Date.now()
    };

    setSelectedMood(mood);

    animate(".checkin-card", {
      scale: [1, 1.03, 1],
      duration: 400,
      easing: "easeOutQuad"
    });

    setTimeout(() => setNote(""), 300);

    onSaved(data);
  }

  return (
    <div
      className="checkin-card"
      style={{
        background: "linear-gradient(135deg, #ffffff, #f6f9ff)",
        borderRadius: "20px",
        padding: "24px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        maxWidth: "500px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "20px",
          color: "#334155",
          width: "100%"
        }}
      >
        How are you feeling today?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          fontSize: "28px",
          marginBottom: "20px",
          width: "100%"
        }}
      >
        {moods.map((m) => (
          <button
            key={m.key}
            onClick={() => submit(m.emoji)}
            style={{
              flex: 1,
              backgroundColor: selectedMood === m.emoji ? "#eef2ff" : "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "12px 0",
              cursor: "pointer",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
              boxShadow:    
                selectedMood === m.emoji
                  ? "0 8px 18px rgba(99,102,241,0.15)"
                  : "0 3px 10px rgba(0,0,0,0.05)",
              textAlign: "center"
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {m.emoji}
          </button>
        ))}
      </div>

      <textarea
        placeholder="Want to share more? (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{
          width: "100%",
          minHeight: "100px",
          borderRadius: "14px",
          border: "1px solid #e5e7eb",
          padding: "14px",
          fontSize: "14px",
          outline: "none",
          resize: "none",
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.03)"
        }}
      />
    </div>
  );
}

import React from "react";
import { Card, CardContent } from "@mui/material";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";

const members = [
  {
    name: "Rakib Hasan",
    role: "President",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Shamima Akter",
    role: "Vice President",
    avatarUrl: "",
  },
  {
    name: "Tariqul Islam",
    role: "General Secretary",
    avatarUrl: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Nusrat Jahan",
    role: "Organizing Secretary",
    avatarUrl: "",
  },
];

export default function MemberListPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shajalal University Science And Technology JCD
      </h1>
      <div className="grid gap-4">
        {members.map((member, idx) => {
          const initials = member.name
            .split(" ")
            .map((word) => word[0])
            .join("");

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <Card
                className="flex items-center gap-4 p-4 transition-transform duration-300 hover:shadow-xl"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  gap: 2,
                  '&:hover': {
                    backgroundColor: '#f3f4f6',
                  },
                }}
              >
                <Avatar
                  src={member.avatarUrl || undefined}
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: "#e0e0e0",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {!member.avatarUrl && initials}
                </Avatar>
                <CardContent sx={{ padding: 0 }}>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h2>
                  <span className="text-sm text-gray-600 text-green-800 font-medium">
                    {member.role}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

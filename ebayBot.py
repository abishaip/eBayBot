import discord
from discord.ext import commands

client = discord.Client()


@client.event
async def on_ready():
    bottest_channel = client.get_channel(815330331070693436)
    await bottest_channel.send('hello')

@client.event
async def on_message(message):
    if message.content == 'bot test':
        bottest_channel = client.get_channel(815330331070693436)
        await bottest_channel.send('test')

client.run('ODE1MzI4MjEwMzI0NTUzNzQ4.YDqzkQ.tfSw7TgMeWwsSGA5mPMbBimUZ-E')

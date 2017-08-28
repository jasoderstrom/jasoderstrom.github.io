---
layout: post
page_css: post
title: "What is C#?"
img: c-sharp.png
date: 2017-08-27 16:16:01 -0600
comments: true
categories: c-sharp
prerequisites: <li> None </li>
goals: <li> Introduce C# and .NET Framework at a high level for all audiences </li>
       <li> Provide high-level overview of why/why not to use C# </li>
---

At a very high level, C# (pronounced cee-sharp) is an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) computer programming language made by the Microsoft Corporation to enable software developers to make a variety of computer applications. With C#, you can make Windows applications, Web applications, database applications, and much more.

<div class="alert alert-info">
<strong>Justin’s Note:</strong> When I refer to C#, I am strictly speaking of Visual C#. This just means Visual C# is Microsoft’s implementation of the C# programming language. 
</div>

# Why Use C#:

C# is based on the C++ (pronounced cee plus plus) programming language and contains similar features to the Java programming language. So, if you already know one of these languages, it should be fairly easy to learn.

It also supports software engineering principles such as [strong type](https://en.wikipedia.org/wiki/Strong_type) checking, array [bounds checking](https://en.wikipedia.org/wiki/Bounds_checking), detection of attempts to use [uninitialized variables](https://en.wikipedia.org/wiki/Uninitialized_variable), and automatic [garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) (biggie). If that didn’t make any sense to you, that’s alright. I will address these more in a future post. For now, all it really means is that C# makes your code *safer* by automatically taking care of details that a programmer may overlook.

C# is also platform-independent, meaning it can be run on different computers with different hardware and [operating systems](https://en.wikipedia.org/wiki/Operating_system). This makes developing applications much easier, as you don’t have to worry if a user has, say, an Intel or AMD CPU in their computer or if they are running Windows 7 or Windows 10.

C# also has its own [integrated development environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment) called Visual Studio that makes developing C# applications easier. Visual Studio includes features like [debugging](https://en.wikipedia.org/wiki/Debugging), [source control](https://en.wikipedia.org/wiki/Version_control), code testing, and more. I talk more in-depth on it in my (Visual Studio) blog posts.

But what sets it apart from the other programming languages is that C# is designed to run on the .NET Framework. The .NET Framework provides full support from Microsoft to develop applications for Windows or any Microsoft product, such as Windows Phone. Let’s take a quick look into what the .NET Framework is.

<div class="alert alert-info">
<strong>Justin’s Note:</strong> C# used to have a mascot called Andy (named after <a href="https://en.wikipedia.org/wiki/Anders_Hejlsberg">Anders Hejlsberg</a>). :) Sadly, Andy was retired on January 29, 2004.
</div>


# The .NET Framework:

The .NET Framework is a development platform for building apps for web, Windows, Windows Phone, Windows Server, and Microsoft Azure. It consists of the common language runtime (CLR) and the .NET Framework class library. The CLR manages the execution of .NET programs by coordinating essential functions such as memory management, code execution, security, and other services. The .NET Framework Class Library provides files that contain pre-written code known as classes that are available to all of the .NET programming languages. These classes provide functionality written and tested by Microsoft to make developing applications faster and easier!

If you’re developing an application for the Windows operating system or with any Microsoft product, the .NET Framework is the best tool to use as it has the full support of Microsoft. Microsoft has already done the legwork of integrating their products with .NET Framework to make developing for Windows or Microsoft applications that much simpler and easy.

<div class="alert alert-info">
<strong>Justin’s Note:</strong> The .NET Framework supports <a href="https://docs.microsoft.com/en-us/dotnet/visual-basic/">Visual Basic</a>, <a href="https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B">Visual C++</a>,<a href="https://msdn.microsoft.com/en-us/visualfsharpdocs/conceptual/visual-fsharp">Visual F#</a>, and the <a href="https://docs.microsoft.com/en-us/dotnet/csharp/csharp">Visual C# </a> programming languages. 
</div>


# When Not To Use C#:

Of course, C# and the .NET Framework is not the best solution for every problem. Until recently, the .NET Framework was designed only for computers running Windows. That has changed with the recent release of .NET Core, which is a lighter version of .NET Framework that can run on different operating systems. However, .NET Core is still new and does not have all the functionality of the .NET Framework. Therefore, if you’re planning on developing for something other than Windows, you might want to consider another a language other than C#.

# Conclusion

In all, C# is a robust programming language that uses the .NET Framework to create a variety of computer applications. C# uses the .NET Framework as an environment to run its programs and as a code library to speed up development time. C# and .NET Framework are best suited for the Windows operating system and working with Microsoft development tools and applications. However, with the advent of .NET Core, C# is starting to support applications on other operating systems.
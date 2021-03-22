package com;

import com.github.javaparser.StaticJavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.serialization.JavaParserJsonSerializer;

import javax.json.Json;
import javax.json.stream.JsonGenerator;
import javax.json.stream.JsonGeneratorFactory;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;
import java.io.StringWriter;
import java.io.File;

import com.github.javaparser.ast.Node;
import com.sun.xml.internal.ws.api.model.ExceptionType;

class MainMethodAccess {

    public static void main(String[] args) throws FileNotFoundException {
        // creates an input stream for the file to be parsed

        if (args.length != 1) {
            System.out.println("参数错误");
        } else {
            File file = new File(args[0]);
            if (file.exists()) {
                try{
                    FileInputStream in = new FileInputStream(args[0]);

                    CompilationUnit cu = StaticJavaParser.parse(in);

                    String serialized = serialize(cu, false);
                    System.out.println(serialized);
                } catch(Exception e) {
                    System.out.println("error");
                }

            } else {
                System.out.println("文件不存在");
            }

        }


    }

    static String serialize(Node node, boolean prettyPrint) {
        Map<String, ?> config = new HashMap<>();
        if (prettyPrint) {
            config.put(JsonGenerator.PRETTY_PRINTING, null);
        }
        JsonGeneratorFactory generatorFactory = Json.createGeneratorFactory(config);
        JavaParserJsonSerializer serializer = new JavaParserJsonSerializer();
        StringWriter jsonWriter = new StringWriter();
        try (JsonGenerator generator = generatorFactory.createGenerator(jsonWriter)) {
            serializer.serialize(node, generator);
        }
        return jsonWriter.toString();
    }

}
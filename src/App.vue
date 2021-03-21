<template>
  <div id="app">
    <div class="app-container" style="height: 100%">
      <el-row>
        <el-col :span="12">
          <codemirror
              style="border: 1px solid #C0C4CC;border-radius: 10px"
              ref="myCm"
              v-model="code"
              value=""
              :options="cmOptions"
              class="code"
              @input="onCmCodeChange"
          />
        </el-col>
        <el-col :span="12">
          <json-view :data="json" :theme="theme" :deep="deep" :iconStyle="iconStyle" :fontSize="fontSize"
                     :lineHeight="lineHeight" :closed="closed" :iconColor="iconColor"/>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import jsonView from 'vue-json-views'
// eslint-disable-next-line no-unused-vars
import {codemirror} from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/oceanic-next.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/xml-fold.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/selection/active-line";

export default {
  name: 'App',
  components: {
    jsonView,
    codemirror
  },
  data() {
    return {
      theme: '',
      iconColor: [],
      fontSize: 14,
      lineHeight: 24,
      deep: 10,
      iconStyle: 'square',
      closed: false,
      color1: '',
      color2: '',
      cmOptions: {
        tabSize: 4,
        mode: "text/javascript",
        theme: "oceanic-next",
        lineNumbers: true,
        line: true,
        foldgutter: true,
        lineWrapping: true,
        foldGutter: true,
        matchBrackets: true,
        autoCloseBrackets: true,
      },
      json: {
        "!": "com.github.javaparser.ast.CompilationUnit",
        "range": {"beginLine": 1, "beginColumn": 1, "endLine": 5, "endColumn": 1},
        "tokenRange": {"beginToken": {"kind": 47, "text": "public"}, "endToken": {"kind": 0, "text": ""}},
        "imports": [],
        "types": [{
          "!": "com.github.javaparser.ast.body.ClassOrInterfaceDeclaration",
          "range": {"beginLine": 1, "beginColumn": 1, "endLine": 5, "endColumn": 1},
          "tokenRange": {"beginToken": {"kind": 47, "text": "public"}, "endToken": {"kind": 99, "text": "}"}},
          "extendedTypes": [],
          "implementedTypes": [],
          "isInterface": "false",
          "typeParameters": [],
          "members": [{
            "!": "com.github.javaparser.ast.body.MethodDeclaration",
            "range": {"beginLine": 2, "beginColumn": 5, "endLine": 4, "endColumn": 5},
            "tokenRange": {"beginToken": {"kind": 47, "text": "public"}, "endToken": {"kind": 99, "text": "}"}},
            "body": {
              "!": "com.github.javaparser.ast.stmt.BlockStmt",
              "range": {"beginLine": 2, "beginColumn": 44, "endLine": 4, "endColumn": 5},
              "tokenRange": {"beginToken": {"kind": 98, "text": "{"}, "endToken": {"kind": 99, "text": "}"}},
              "statements": [{
                "!": "com.github.javaparser.ast.stmt.ExpressionStmt",
                "range": {"beginLine": 3, "beginColumn": 9, "endLine": 3, "endColumn": 42},
                "tokenRange": {"beginToken": {"kind": 93, "text": "System"}, "endToken": {"kind": 102, "text": ";"}},
                "expression": {
                  "!": "com.github.javaparser.ast.expr.MethodCallExpr",
                  "range": {"beginLine": 3, "beginColumn": 9, "endLine": 3, "endColumn": 41},
                  "tokenRange": {"beginToken": {"kind": 93, "text": "System"}, "endToken": {"kind": 97, "text": ")"}},
                  "arguments": [{
                    "!": "com.github.javaparser.ast.expr.StringLiteralExpr",
                    "range": {"beginLine": 3, "beginColumn": 28, "endLine": 3, "endColumn": 40},
                    "tokenRange": {
                      "beginToken": {"kind": 89, "text": "\"Hello World\""},
                      "endToken": {"kind": 89, "text": "\"Hello World\""}
                    },
                    "value": "Hello World"
                  }],
                  "name": {
                    "!": "com.github.javaparser.ast.expr.SimpleName",
                    "range": {"beginLine": 3, "beginColumn": 20, "endLine": 3, "endColumn": 26},
                    "tokenRange": {
                      "beginToken": {"kind": 93, "text": "println"},
                      "endToken": {"kind": 93, "text": "println"}
                    },
                    "identifier": "println"
                  },
                  "scope": {
                    "!": "com.github.javaparser.ast.expr.FieldAccessExpr",
                    "range": {"beginLine": 3, "beginColumn": 9, "endLine": 3, "endColumn": 18},
                    "tokenRange": {
                      "beginToken": {"kind": 93, "text": "System"},
                      "endToken": {"kind": 93, "text": "out"}
                    },
                    "name": {
                      "!": "com.github.javaparser.ast.expr.SimpleName",
                      "range": {"beginLine": 3, "beginColumn": 16, "endLine": 3, "endColumn": 18},
                      "tokenRange": {
                        "beginToken": {"kind": 93, "text": "out"},
                        "endToken": {"kind": 93, "text": "out"}
                      },
                      "identifier": "out"
                    },
                    "scope": {
                      "!": "com.github.javaparser.ast.expr.NameExpr",
                      "range": {"beginLine": 3, "beginColumn": 9, "endLine": 3, "endColumn": 14},
                      "tokenRange": {
                        "beginToken": {"kind": 93, "text": "System"},
                        "endToken": {"kind": 93, "text": "System"}
                      },
                      "name": {
                        "!": "com.github.javaparser.ast.expr.SimpleName",
                        "range": {"beginLine": 3, "beginColumn": 9, "endLine": 3, "endColumn": 14},
                        "tokenRange": {
                          "beginToken": {"kind": 93, "text": "System"},
                          "endToken": {"kind": 93, "text": "System"}
                        },
                        "identifier": "System"
                      }
                    }
                  }
                }
              }]
            },
            "type": {
              "!": "com.github.javaparser.ast.type.VoidType",
              "range": {"beginLine": 2, "beginColumn": 19, "endLine": 2, "endColumn": 22},
              "tokenRange": {"beginToken": {"kind": 61, "text": "void"}, "endToken": {"kind": 61, "text": "void"}},
              "annotations": []
            },
            "modifiers": [{
              "!": "com.github.javaparser.ast.Modifier",
              "range": {"beginLine": 2, "beginColumn": 5, "endLine": 2, "endColumn": 10},
              "tokenRange": {"beginToken": {"kind": 47, "text": "public"}, "endToken": {"kind": 47, "text": "public"}},
              "keyword": "PUBLIC"
            }, {
              "!": "com.github.javaparser.ast.Modifier",
              "range": {"beginLine": 2, "beginColumn": 12, "endLine": 2, "endColumn": 17},
              "tokenRange": {"beginToken": {"kind": 50, "text": "static"}, "endToken": {"kind": 50, "text": "static"}},
              "keyword": "STATIC"
            }],
            "name": {
              "!": "com.github.javaparser.ast.expr.SimpleName",
              "range": {"beginLine": 2, "beginColumn": 24, "endLine": 2, "endColumn": 27},
              "tokenRange": {"beginToken": {"kind": 93, "text": "main"}, "endToken": {"kind": 93, "text": "main"}},
              "identifier": "main"
            },
            "parameters": [{
              "!": "com.github.javaparser.ast.body.Parameter",
              "range": {"beginLine": 2, "beginColumn": 29, "endLine": 2, "endColumn": 41},
              "tokenRange": {"beginToken": {"kind": 93, "text": "String"}, "endToken": {"kind": 93, "text": "args"}},
              "annotations": [],
              "isVarArgs": "false",
              "modifiers": [],
              "name": {
                "!": "com.github.javaparser.ast.expr.SimpleName",
                "range": {"beginLine": 2, "beginColumn": 38, "endLine": 2, "endColumn": 41},
                "tokenRange": {"beginToken": {"kind": 93, "text": "args"}, "endToken": {"kind": 93, "text": "args"}},
                "identifier": "args"
              },
              "type": {
                "!": "com.github.javaparser.ast.type.ArrayType",
                "range": {"beginLine": 2, "beginColumn": 29, "endLine": 2, "endColumn": 36},
                "tokenRange": {"beginToken": {"kind": 93, "text": "String"}, "endToken": {"kind": 101, "text": "]"}},
                "componentType": {
                  "!": "com.github.javaparser.ast.type.ClassOrInterfaceType",
                  "range": {"beginLine": 2, "beginColumn": 29, "endLine": 2, "endColumn": 34},
                  "tokenRange": {
                    "beginToken": {"kind": 93, "text": "String"},
                    "endToken": {"kind": 93, "text": "String"}
                  },
                  "name": {
                    "!": "com.github.javaparser.ast.expr.SimpleName",
                    "range": {"beginLine": 2, "beginColumn": 29, "endLine": 2, "endColumn": 34},
                    "tokenRange": {
                      "beginToken": {"kind": 93, "text": "String"},
                      "endToken": {"kind": 93, "text": "String"}
                    },
                    "identifier": "String"
                  },
                  "annotations": []
                },
                "origin": "TYPE",
                "annotations": []
              },
              "varArgsAnnotations": []
            }],
            "thrownExceptions": [],
            "typeParameters": [],
            "annotations": []
          }],
          "modifiers": [{
            "!": "com.github.javaparser.ast.Modifier",
            "range": {"beginLine": 1, "beginColumn": 1, "endLine": 1, "endColumn": 6},
            "tokenRange": {"beginToken": {"kind": 47, "text": "public"}, "endToken": {"kind": 47, "text": "public"}},
            "keyword": "PUBLIC"
          }],
          "name": {
            "!": "com.github.javaparser.ast.expr.SimpleName",
            "range": {"beginLine": 1, "beginColumn": 14, "endLine": 1, "endColumn": 23},
            "tokenRange": {
              "beginToken": {"kind": 93, "text": "HelloWorld"},
              "endToken": {"kind": 93, "text": "HelloWorld"}
            },
            "identifier": "HelloWorld"
          },
          "annotations": []
        }]
      },
      code: "public class HelloWorld {\n" +
          "    public static void main(String[] args) {\n" +
          "      System.out.println(\"Hello World\");\n" +
          "    }\n" + "}\n",

    }

  },
  methods: {
    onCmCodeChange(newCode) {
      console.log(newCode);
      this.$axios({
        url: "/code",
        data: {
          code: newCode,
        },
        method: "post",
        header: {
          "Content-Type": "application/json", //如果写成contentType会报错
        },
      })
          .then((res) => {
            console.log(res.data);
            this.json = res.data;
          })
          .catch((Error) => {
            console.log(Error);
          });
    }
  }
}
</script>

<style lang="scss">
.app-container {
  height: 100%;

  .text {
    font-size: 14px;
  }

  .el-col-400 {
    height: 80vh;
    position: relative;
  }

  // fix
  .CodeMirror {
    height: 100vh; //80vh !important;
    //border: 1px solid #DCDFE6;
    //border-radius: 4px;
  }

  .height-400 {
    height: 90vh !important;
    position: relative;

    &.el-textarea {
      height: 100%;
    }

    .el-textarea__inner {
      height: 100% !important;
    }
  }

}

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

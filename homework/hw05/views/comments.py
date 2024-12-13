import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.comment import Comment


class CommentListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def post(self):
        data = request.json
        print(data)
    
        post_id = data.get("post_id")
        text = data.get("text")

        new_comment = Comment (
            user_id = self.current_user,
            post_id = post_id, 
            text = text,
        )
        db.session.add(new_comment)
        db.session.commit()

        # TODO: Add POST logic...
        return Response(
            json.dumps({new_comment.to_dict(user=self.current_user)}),
            mimetype="application/json",
            status=201,
        )


class CommentDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def delete(self, id):
        # TODO: Add DELETE logic...
        print("Comment id=", id)

        

        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )


def initialize_routes(api, current_user):
    api.add_resource(
        CommentListEndpoint,
        "/api/comments",
        "/api/comments/",
        resource_class_kwargs={"current_user": current_user},
    )
    api.add_resource(
        CommentDetailEndpoint,
        "/api/comments/<int:id>",
        "/api/comments/<int:id>/",
        resource_class_kwargs={"current_user": current_user},
    )
